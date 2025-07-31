// const input = document.getElementById('input')
// const sentBtn = document.getElementById('sentBtn')
// const userList = document.getElementById('userList')





// sentBtn.addEventListener('click', () => {
//     const tr = document.createElement('tr')
//     tr.innerHTML = `
// <tr>
//                   <th>
//                     <label>
//                       <input type="checkbox" class="checkbox" />
//                     </label>
//                   </th>
//                   <td>
//                     <div class="flex items-center gap-3">
//                       <div class="avatar">
//                         <div class="mask mask-squircle h-12 w-12">
//                           <img
//                             src="https://img.daisyui.com/images/profile/demo/2@94.webp"
//                             alt="Avatar Tailwind CSS Component" />
//                         </div>
//                       </div>
//                       <div class="flex items-center gap-3">
//                         <div class="font-bold">${input.value}</div>
//                             <button class="text-base-100 btn btn-error">Delete</button>
//     <button class="text-base-100 btn btn-accent">Edit</button>
//                       </div>
//                     </div>
//                   </td>

//                 </tr>

//                     `
//                     input.value = ''
//                     userList.append(tr)
// })

// let userName = document.getElementById('userName');
// let sentBtn = document.getElementById('sentBtn');
// let tbody = document.getElementById('tbody');
// window.addEventListener('DOMContentLoaded', () => {
//     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
//     existingUsers.forEach((element, index) => {
//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//             <th>${index + 1}</th>
//             <td>${element.name}</td>

//         `;
//         tbody.append(tr);
//     });
// });
// sentBtn.addEventListener('click', () => {
//     const user = {
//         name: userName.value,

//     };
//     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
//     existingUsers.push(user);
//     localStorage.setItem("users", JSON.stringify(existingUsers));

//     // Faqat oxirgi userni jadvalga qo‘shish
//     const tr = document.createElement('tr');
//     tr.innerHTML = `
//         <th>${existingUsers.length}</th>
//         <td>${user.name}</td>
//     `;
//     tbody.append(tr);

//     userName.value = "";
//     lastname.value = "";
//     userAge.value = "";
// });



let userName = document.getElementById('userName');
let sentBtn = document.getElementById('sentBtn');
let tbody = document.getElementById('tbody');
 const btnremove =document.getElementById('btnremove')

window.addEventListener('DOMContentLoaded', () => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.forEach((element, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th>${index + 1}</th>
            <td>${element.name}</td>
            <td>
                <button class="text-base-100 btn btn-error">Delete</button>
                <button class="text-base-100 btn btn-accent">Edit</button>
            </td>
        `;
        tbody.append(tr);
    });
});

sentBtn.addEventListener('click', () => {
    const user = {
        name: userName.value,
    };

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Faqat oxirgi userni jadvalga qo‘shish
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th>${existingUsers.length}</th>
        <td>${user.name}</td>
        <td>
            <button class="text-base-100 btn btn-error">Delete</button>
            <button class="text-base-100 btn btn-accent">Edit</button>
        </td>
    `;
    tbody.append(tr);

    userName.value = "";
    lastname.value = "";
    userAge.value = "";
});

btnremove.addEventListener('click', () => {
    localStorage.removeItem('user');
});
