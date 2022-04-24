const hashtag = {
    title: "#example",
    status: "trending",
    numberOfTweets: 3,
    dateCreated: "Yesterday",
    lastUpdated: "Today",

    getHashtagStatus: function () {
        return `Hashtag: ${this.title} \nStatus: ${this.status}`
    },
    getHashtagDate: function () {
        return `This hashtag was created ${this.dateCreated}`
    }
}

console.log(hashtag.getHashtagStatus())
console.log(hashtag.getHashtagDate())