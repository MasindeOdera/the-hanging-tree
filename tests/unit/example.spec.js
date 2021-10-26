import { shallowMount } from "@vue/test-utils";
import LandingPage from "@/components/LandingPage.vue";

describe("LandingPage.vue", () => {
  it("renders props.greeting when passed", () => {
    const greeting = "new message";
    const wrapper = shallowMount(LandingPage, {
      propsData: { greeting },
    });
    expect(wrapper.text()).toMatch(greeting);
  });
});
