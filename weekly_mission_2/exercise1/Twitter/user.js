const user = {
    nickname: "@JorgeRodriguez1998",
    tweets: 100,
    followers: 199,
    replies: 299,

    getTotalFollowers: function(){
      return `${this.nickname} has ${this.followers} followers`
    },
    getTotalTweets: function(){
      return `${this.nickname} has ${this.tweets} tweets`
    }
   }
   
   console.log("Usuario:" + user.nickname)
   console.log(user.getTotalFollowers())
   console.log(user.getTotalTweets())
   