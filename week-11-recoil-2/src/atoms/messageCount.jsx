import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { useEffect } from "react";
import { data } from "../data";

// // atoms family
// export const postAtomFamily = atomFamily({
//     key: "postAtomFamily",
//     default: id => {
//         return data.find(c => c.id === id);
//     }
// });

// asynchronous atom family
export const postAtomFamily = atomFamily({
    key: "postAtomFamily",
    default: selectorFamily({
        key: "postAtomFamilySelector",
        get: id => async({get}) => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            const json = await res.json();
            return json;
        }
    })
})

// export const messageCountAtom = atom({
//     key: "messageCount",
//     default: 4
// });

// export const activityCountAtom = atom({
//     key: "activityCount",
//     default: 0
// })

// export const viewCountAtom = atom({
//     key: "viewCount",
//     default: 100
// })

// // asynchronous data query
// export const getDataAtom = atom({
//     key: "data",
//     default: selector({
//         key: "dataSelector",
//         get: async () => {
//             const response = await fetch("https:jsonplaceholder.typicode.com/posts/1/comments");
//             const json = await response.json();
//             return json;
//         }
//     })
// })

// // derived state (selecter)
// export const allNotificationAtom = selector({
//     key: "allNotificationCount",
//     get: ({get}) => {
//         const message = get(messageCountAtom);
//         const activity = get(activityCountAtom);
//         const view = get(viewCountAtom);

//         return message + activity + view;
//     }
// })