export type IItem = {
	text: string
	finished: boolean
}
export interface IToDoSliceState {
	listItems: IItem[]
	userWrite: string
}
