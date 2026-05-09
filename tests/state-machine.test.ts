import { describe, expect, it } from "vitest";
import { transition } from "../src/state-machine.js";

describe("approval state machine", () => {
  it("moves a draft request to pending", () => {
    expect(transition("draft", { type: "submit" })).toBe("pending");
  });

  it("approves a pending request", () => {
    expect(transition("pending", { type: "approve", approverId: "U_APPROVER" })).toBe("approved");
  });

  it("rejects a pending request", () => {
    expect(transition("pending", { type: "reject", approverId: "U_APPROVER", reason: "budget" })).toBe("rejected");
  });
});

