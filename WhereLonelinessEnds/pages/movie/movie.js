const quote = [
  'https://s2.loli.net/2022/01/15/3SxfZKeYGpu7NoW.jpg',
  'https://s2.loli.net/2022/01/15/M7RfeKmadE8tQjS.jpg',
  'https://s2.loli.net/2022/01/15/chpUNPJaqIe6BGn.jpg',
  'https://s2.loli.net/2022/01/15/uF1N5ckovYUaM9J.jpg',
  'https://s2.loli.net/2022/01/15/WJuHqA46ixab7RG.jpg',
  'https://s2.loli.net/2022/01/15/ESBNVszXr2F5Zmb.jpg',
  'https://s2.loli.net/2022/01/15/2VOYTxGyzPro1lR.jpg',
  'https://s2.loli.net/2022/01/15/VSceP2wGUInt3j4.jpg',
  'https://s2.loli.net/2022/01/15/KgeLCVOcXQ1itTh.jpg',
  'https://s2.loli.net/2022/01/15/h2EfDiG3b6PjevM.jpg',
  '../images/movie/11.jpg',
  '../images/movie/12.jpg',
  '../images/movie/13.jpg',
  '../images/movie/14.jpg',
  '../images/movie/15.jpg',
  '../images/movie/16.jpg',
  '../images/movie/17.jpg',
  '../images/movie/18.jpg',
  '../images/movie/19.jpg',
  '../images/movie/20.jpg'
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
    text: 'https://s2.loli.net/2022/01/15/chpUNPJaqIe6BGn.jpg',
  },
  nextQuote: ['test'],

  change() {
    this.nextQuote.pop()
    this.nextQuote.push(quote[Math.floor((Math.random() * 20))])
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
