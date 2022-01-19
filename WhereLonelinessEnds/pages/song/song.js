const quote = [
  '../images/song/01.jpg',
  '../images/song/02.jpg',
  '../images/song/03.jpg',
  '../images/song/04.jpg',
  '../images/song/05.jpg',
  '../images/song/06.jpg',
  '../images/song/07.jpg',
  '../images/song/08.jpg',
  '../images/song/09.jpg',
  '../images/song/10.jpg',
  '../images/song/11.jpg',
  '../images/song/12.jpg',
  '../images/song/13.jpg',
  '../images/song/14.jpg',
  '../images/song/15.jpg',
  '../images/song/16.jpg',
  '../images/song/17.jpg',
  '../images/song/18.jpg',
  '../images/song/19.jpg'
]

Page({
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: 'text',
      path: 'page/component/pages/book/book'
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    text: '../images/song/16.jpg',
  },
  nextQuote: ['test'],

  change() {
    this.nextQuote.pop()
    this.nextQuote.push(quote[Math.floor((Math.random() * 19))])
    this.setData({
      text: this.nextQuote
    })
    setTimeout(() => {
      this.setData({
        scrollTop: 99999
      })
    }, 0)
  }
})
