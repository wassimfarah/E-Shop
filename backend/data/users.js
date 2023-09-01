import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jane',
        email: 'Jane@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'John',
        email: 'John@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },

];

export default users;