let squad = [

    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },

    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },

    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },

    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },

    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }

];

const displayList = (listPlayer) =>{
    listPlayer.forEach((item) =>{
        console.log(` Mã ${item.id} - ${item.name} : ${item.goals} bàn`);
        
    })
}
const addPlayer = () => {
    let newName = prompt("Mời nhập vào tên: ");
    let newGoal = +prompt("Nhập bàn thắng:");
    let newPosition = prompt("Nhập vị trí: ").toUpperCase();

    let newId = squad.length ? squad[squad.length - 1].id + 1 : 1;

    let newPlayer = {
        id: newId,
        name: newName,
        goals: newGoal,
        position: newPosition
    };

    squad.push(newPlayer);

    alert("Đã thêm cầu thủ thành công!");
};
const findPlayerById = () => {
    let id = +prompt("Nhập ID cần tìm:");

    let player = squad.find(item => item.id === id);

    if (player) {
        console.log(`Mã ${player.id} - ${player.name} (${player.position}) : ${player.goals} bàn`);
    } else {
        console.log("Không tìm thấy cầu thủ!");
    }
};
const updateGoal = () => {
    let id = +prompt("Nhập ID cầu thủ ghi bàn:");

    let player = squad.find(item => item.id === id);

    if (player) {
        player.goals += 1;
        console.log(`Đã cập nhật bàn thắng cho ${player.name} thành ${player.goals}`);
    } else {
        console.log("Không tìm thấy cầu thủ!");
    }
};
const deletePlayer = () => {
    let id = +prompt("Nhập ID cần xóa:");

    let index = squad.findIndex(item => item.id === id);

    if (index !== -1) {
        let removed = squad.splice(index, 1);
        console.log(`Đã xóa cầu thủ ${removed[0].name}`);
    } else {
        console.log("Không tìm thấy cầu thủ!");
    }
};
let choice;

do {
    choice = +prompt(`
        === QUẢN LÍ ĐỘI BÓNG===
        1. Xem danh sách
        2. Thêm cầu thủ
        3. Tìm kiếm (theo ID)
        4. Cập nhật bàn thắng
        5. Xóa cầu thủ
        0. Thoát`
    );
    switch (choice) {
        case 1:
            displayList(squad);
            break;
        case 2:
            addPlayer();
            break;
        case 3:
            findPlayerById();
            break;
        case 4:
            updateGoal();
            break;
        case 5:
            deletePlayer();
            break;
        case 0:
            alert("Thoát chương trình, hẹn gặp lại")
            break;
    
        default:
            alert("Lỗi. Vui lòng chọn đúng ")
            break;
    }

} while (choice !== 0);