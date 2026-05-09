import { describe, expect, it } from "vitest";
import { createApprovalRequest } from "../src/apply-command.js";

describe("/apply command", () => {
  it("creates a pending request", () => {
    expect(
      createApprovalRequest({
        requesterId: "U_REQUESTER",
        title: "Buy monitor",
        eventId: "evt-1"
      })
    ).toMatchObject({
      id: "req_evt-1",
      requesterId: "U_REQUESTER",
      title: "Buy monitor",
      state: "pending",
      requiredApprovals: 1
    });
  });

  it("requires two approvals for high amount requests", () => {
    expect(
      createApprovalRequest({
        requesterId: "U_REQUESTER",
        title: "Cloud contract",
        amountYen: 200000,
        eventId: "evt-2"
      }).requiredApprovals
    ).toBe(2);
  });
});

