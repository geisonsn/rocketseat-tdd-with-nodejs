const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password', async () => {
    const user = await User.create({
      id: 1,
      name: 'Geison', 
      email: 'geison.sn@gmail.com',
      password: '123456'
    });
    
    const comparedHash = await bcrypt.compare('123456', user.password_hash);

    expect(comparedHash).toBe(true);
  });
});