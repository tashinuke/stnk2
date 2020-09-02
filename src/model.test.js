const { getPosts, getSlides } = require('./model');
test('get posts checking', () => {
  getSlides().then((d) => {
    expect(d.content).toBe([{
      link: 'https://vk.com/sucilia',
      img: 'https://res.cloudinary.com/dhzon6aew/image/upload/v1598536063/Screenshot_2020_08_27_Novosti_660fcd07e1.png',
    }]);
    console.log(d)
  })
})
