const issue = {
    title: "example",
    author: "JorgeRodriguez1998",
    branchName: "semana-2",
    dateCreated: "Yesterday",
    status: "open",
    repositoryNameAssociated: "weekly_mission_2",

    getTitleAndAuthor: function () {
        return `Title: ${this.title} \nAuthor: ${this.author}`
    },
    getStatus: function () {
        return `Status: ${this.status}`
    }

}

console.log(issue.getTitleAndAuthor())
console.log(issue.getStatus())