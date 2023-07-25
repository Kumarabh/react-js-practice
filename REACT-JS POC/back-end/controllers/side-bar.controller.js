import path from 'path';

const getAllData = async (req, res, next) => {
    res.header("Content-Type",'application/json');
    return res.status(200).sendFile(path.resolve('assets/sideBar/data.json'));
}

export {getAllData};