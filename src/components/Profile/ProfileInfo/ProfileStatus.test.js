// import React from "react";
// import { create } from "react-test-renderer";
// import ProfileStatus from "./ProfileStatus";
//
// describe("ProfileStatus component", () => {
//     test("status from props should be in the state", () => {
//         const component = create(<ProfileStatus status="it-kamasutra.com" />);
//         const instance = component.getInstance();
//         expect(instance.state.status).toBe("it-kamasutra.com");
//     });
//
//     test("after creation span with correct status should be displayed", () => {
//         const component = create(<ProfileStatus status="it-kamasutra.com" />);
//         const root = component.root();
//         let span = root.findByType("span")
//         expect(span.length).toBe(1);
//     });
//
//     test("after creation span with correct status should be displayed", () => {
//         const component = create(<ProfileStatus status="it-kamasutra.com" />);
//         //@ts-ignore
//         const root = component.root();
//         let span = root.findByType("span")
//         expect(span.innerText).toBe("it-kamasutra.com");
//     });
// });
//
// //...