const issue = {
    title: "example",
    repositoryNameAssociated: "weekly_mission_2",
    status: "open",
    numberOfComments: 3,
    labels: "semana-2",
    author: "JorgeRodriguez1998",
    dateCreated: "Yesterday",
    lastUpdated: "Today",

    getTitleAndAuthor: function () {
        return `Title: ${this.title} \nAuthor: ${this.author}`
    },
    getGeneralInfo: function () {
        return `This issue was created ${this.dateCreated} by ${this.author}`
    }
}

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())