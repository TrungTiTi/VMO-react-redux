export const countAction = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    INCREIMMER: 'INCREIMMER',
    DECREIMMER: 'DECREIMMER'
}

export const onIncrement = () => ({
    type: countAction.INCREMENT
})

export const onDecrement = () => ({
    type: countAction.DECREMENT
})

export const onIncreImmer = () => ({
    type: countAction.INCREIMMER
})

export const onDecreImmer = () => ({
    type: countAction.DECREIMMER
})