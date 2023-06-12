import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";
import Footer from "../Footer.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: "Hello Vitest" },
      global: {
        stubs: {
          Footer: {
            template: "<div> stub footer</div>",
            props: ["msg"],
          },
        },
      },
    });
    expect(wrapper.text()).toContain("Hello Vitest");
    expect(wrapper.findComponent(Footer).props("msg")).toContain(
      "Hello Vitest"
    );
  });
});
