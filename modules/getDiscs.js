// import a module that can read the discs in the pc

const nodeDiskInfo = require('node-disk-info');

// Make an array that can store the disc names

let diskArray = []

// Get the discs using the module we have declared on the top in a synchronous way so that the discs cannot lose their postions

try {
    const disks = nodeDiskInfo.getDiskInfoSync();
    disks.forEach((disk) => {
        diskArray.push(disk._mounted)
    })
} catch (e) {
    console.error(e);
}

// finally export the array which contains the discs

module.exports=diskArray