export {}

type IPost = {
	postId: number
	id: number
	name: string
	email: string
	body: string
}

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments"

function getData(url: string): Promise<IPost[]> {
	return fetch(url).then(res => res.json())
}

getData(COMMENTS_URL)
	.then((result) => {
		return result
			.reduce(
				(acc: string, item: IPost) =>
					acc + `ID:${item.id}, Email:${item.email}\n`,
				""
			)
	})
	.then(console.log)

async function getData2(url: string): Promise<IPost[]> {
	const response = await fetch(url)
	const data = await response.json()

	return data
}

;(async function () {
	const res2 = await getData2(COMMENTS_URL)
	console.log(
		res2
			.reduce(
				(acc: string, item: IPost) =>
					(acc += "ID:" + item.id + ",Email: " + item.email + "\n"),
				""
			)
	)
})()
