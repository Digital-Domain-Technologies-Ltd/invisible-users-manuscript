/**
 * Identity Delegation Middleware - Proof of Concept
 *
 * Cloudflare Worker demonstrating agent-friendly identity delegation.
 * Aligns with "The Invisible Users" Chapter 11: The Missing Identity Layer
 *
 * IMPORTANT: This is a simplified proof-of-concept implementation demonstrating
 * the core principles described in the book. A comprehensive, production-ready
 * identity delegation system will be developed as a future open-source project.
 *
 * For updates on the full identity delegation infrastructure project:
 * https://allabout.network/invisible-users/identity-layer.html
 *
 * This implementation shows how businesses can:
 * - Accept explicit agent identification
 * - Preserve customer identity through delegation tokens
 * - Log agent involvement consensually (not covertly)
 * - Enable agent-mediated commerce whilst maintaining customer relationships
 *
 * Philosophy: Cooperation over detection. Agents identify themselves,
 * businesses accommodate them, users maintain control.
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // --- 1. Check for explicit agent identification ---
    const agentId = request.headers.get("x-agent-id");
    const delegationToken = request.headers.get("x-delegation-token");
    const userId = request.headers.get("x-user-id");

    // --- 2. Agent-mediated request handling ---
    if (agentId && delegationToken) {
      return await handleAgentRequest(request, env, {
        agentId,
        delegationToken,
        userId,
        url
      });
    }

    // --- 3. Direct user request (no agent involved) ---
    return await handleDirectRequest(request, env);
  }
};

/**
 * Handle agent-mediated requests with identity preservation
 */
async function handleAgentRequest(request, env, context) {
  const { agentId, delegationToken, userId, url } = context;

  // --- Step 1: Verify delegation token ---
  const verification = await verifyDelegationToken(delegationToken, env);

  if (!verification.valid) {
    return new Response(JSON.stringify({
      error: "Invalid delegation token",
      message: "Agent authorization could not be verified",
      agentId
    }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  // --- Step 2: Extract verified customer identity ---
  const customerId = verification.userId;
  const customerProfile = await fetchCustomerProfile(customerId, env);

  // --- Step 3: Log agent involvement (consensual, auditable) ---
  await logAgentTransaction({
    timestamp: new Date().toISOString(),
    agentId,
    agentName: verification.agentName,
    customerId,
    customerEmail: customerProfile.email,
    action: url.pathname,
    method: request.method,
    delegationScope: verification.scope,
    preservedIdentity: true
  }, env);

  // --- Step 4: Process request with preserved customer identity ---
  // The business sees the CUSTOMER, not just an anonymous agent
  const response = await processRequest(request, {
    customerId,
    customerProfile,
    agentMediated: true,
    agentId
  }, env);

  // --- Step 5: Add agent-friendly response headers ---
  const headers = new Headers(response.headers);
  headers.set("X-Customer-Identity-Preserved", "true");
  headers.set("X-Agent-Transaction-Id", generateTransactionId());
  headers.set("X-Delegation-Verified", "true");

  return new Response(response.body, {
    status: response.status,
    headers
  });
}

/**
 * Handle direct user requests (no agent)
 */
async function handleDirectRequest(request, env) {
  // Traditional authentication flow
  const session = await verifyUserSession(request, env);

  if (!session.valid) {
    return new Response("Unauthorized", { status: 401 });
  }

  return await processRequest(request, {
    customerId: session.userId,
    customerProfile: await fetchCustomerProfile(session.userId, env),
    agentMediated: false
  }, env);
}

/**
 * Verify delegation token using OAuth 2.0 delegation extension pattern
 */
async function verifyDelegationToken(token, env) {
  try {
    // In production: verify JWT signature, check expiry, validate scope
    // This example shows the verification structure

    const decoded = await decodeJWT(token, env.JWT_SECRET);

    // Validate delegation claims
    if (!decoded.sub || !decoded.agent_id || !decoded.scope) {
      return { valid: false, error: "Missing required claims" };
    }

    // Check token hasn't been revoked
    const revoked = await checkRevocation(decoded.jti, env);
    if (revoked) {
      return { valid: false, error: "Token has been revoked" };
    }

    // Verify scope matches request
    const scopeValid = validateScope(decoded.scope, request.method);
    if (!scopeValid) {
      return { valid: false, error: "Insufficient scope" };
    }

    return {
      valid: true,
      userId: decoded.sub,
      agentId: decoded.agent_id,
      agentName: decoded.agent_name,
      scope: decoded.scope,
      expiresAt: decoded.exp
    };

  } catch (error) {
    return {
      valid: false,
      error: error.message
    };
  }
}

/**
 * Fetch customer profile with loyalty data, preferences, history
 */
async function fetchCustomerProfile(customerId, env) {
  // In production: query customer database
  // Return profile that preserves customer relationship

  return {
    id: customerId,
    email: "customer@example.com",
    loyaltyPoints: 1250,
    preferredPaymentMethod: "card_ending_4242",
    shippingAddress: {
      street: "123 Main St",
      city: "London",
      postcode: "SW1A 1AA"
    },
    orderHistory: await fetchOrderHistory(customerId, env),
    preferences: {
      newsletter: true,
      smsUpdates: false
    }
  };
}

/**
 * Log agent transaction for audit trail and analytics
 */
async function logAgentTransaction(data, env) {
  // Option 1: Cloudflare Analytics Engine
  if (env.AGENT_ANALYTICS) {
    await env.AGENT_ANALYTICS.writeDataPoint({
      blobs: [JSON.stringify(data)],
      doubles: [1], // Count of agent transactions
      indexes: [data.agentId]
    });
  }

  // Option 2: Cloudflare R2 for long-term storage
  if (env.AGENT_LOGS) {
    const key = `agent-logs/${data.customerId}/${data.timestamp}.json`;
    await env.AGENT_LOGS.put(key, JSON.stringify(data, null, 2));
  }

  // Option 3: External webhook for real-time analytics
  if (env.ANALYTICS_WEBHOOK) {
    fetch(env.ANALYTICS_WEBHOOK, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).catch(err => console.error("Analytics webhook failed:", err));
  }
}

/**
 * Process request with customer context
 */
async function processRequest(request, context, env) {
  const { customerId, customerProfile, agentMediated } = context;

  // Business logic has access to:
  // - Customer identity (for loyalty, recommendations, order history)
  // - Agent mediation flag (for analytics, A/B testing)
  // - Full customer profile (same data as direct requests)

  // Example: Apply loyalty discount regardless of agent vs direct
  const loyaltyDiscount = calculateLoyaltyDiscount(customerProfile.loyaltyPoints);

  // Example: Recommendation engine uses customer history
  const recommendations = await generateRecommendations(
    customerProfile.orderHistory,
    customerProfile.preferences
  );

  // Return response with customer-specific data
  return new Response(JSON.stringify({
    customerId,
    loyaltyPoints: customerProfile.loyaltyPoints,
    loyaltyDiscount,
    recommendations,
    agentMediated,
    message: agentMediated
      ? "Order processed via authorized agent - identity preserved"
      : "Order processed directly"
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

/**
 * Example: Calculate loyalty discount based on points
 */
function calculateLoyaltyDiscount(points) {
  if (points >= 1000) return 0.15; // 15% discount
  if (points >= 500) return 0.10;  // 10% discount
  if (points >= 100) return 0.05;  // 5% discount
  return 0;
}

/**
 * Example: Generate recommendations based on order history
 */
async function generateRecommendations(orderHistory, preferences) {
  // In production: ML-based recommendations using customer data
  return [
    { id: "prod_123", name: "Related Product A", confidence: 0.87 },
    { id: "prod_456", name: "Frequently Bought Together", confidence: 0.72 }
  ];
}

/**
 * Generate unique transaction ID for audit trail
 */
function generateTransactionId() {
  return `agt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Helper: Decode JWT token
 */
async function decodeJWT(token, secret) {
  // In production: use jose library or similar
  // This is a placeholder showing the structure
  const parts = token.split('.');
  if (parts.length !== 3) {
    throw new Error("Invalid JWT format");
  }

  const payload = JSON.parse(atob(parts[1]));

  // Verify signature (simplified - use proper crypto in production)
  // await verifySignature(parts[0], parts[1], parts[2], secret);

  return payload;
}

/**
 * Helper: Check if token has been revoked
 */
async function checkRevocation(jti, env) {
  // In production: check revocation list in KV or database
  if (env.REVOKED_TOKENS) {
    const revoked = await env.REVOKED_TOKENS.get(jti);
    return revoked !== null;
  }
  return false;
}

/**
 * Helper: Validate token scope matches request
 */
function validateScope(scope, method) {
  // Example scope validation
  const scopes = scope.split(' ');

  const requiredScope = method === 'POST' ? 'purchase' : 'read';
  return scopes.includes(requiredScope);
}

/**
 * Helper: Verify user session (traditional auth)
 */
async function verifyUserSession(request, env) {
  const cookie = request.headers.get("cookie");
  if (!cookie) {
    return { valid: false };
  }

  // In production: verify session cookie, check expiry
  const sessionId = extractSessionId(cookie);
  const session = await env.SESSIONS.get(sessionId);

  if (!session) {
    return { valid: false };
  }

  return {
    valid: true,
    userId: session.userId
  };
}

/**
 * Helper: Extract session ID from cookie
 */
function extractSessionId(cookie) {
  const match = cookie.match(/session=([^;]+)/);
  return match ? match[1] : null;
}

/**
 * Helper: Fetch order history
 */
async function fetchOrderHistory(customerId, env) {
  // In production: query order database
  return [
    { id: "ord_789", date: "2025-01-05", total: 125.50 },
    { id: "ord_790", date: "2024-12-20", total: 89.99 }
  ];
}
