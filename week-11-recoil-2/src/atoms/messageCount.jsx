import { atom, selector } from "recoil";
import { useEffect } from "react";

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

// asynchronous data query
export const getDataAtom = atom({
    key: "data",
    default: selector({
        key: "dataSelector",
        get: async () => {
            const response = await fetch("https:jsonplaceholder.typicode.com/posts/1/comments");
            const json = await response.json();
            return json;
        }
    })
})

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