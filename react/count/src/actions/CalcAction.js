
const INCREASEMENT = 'INCREASEMENT';
const DECREASEMENT = 'DECREASEMENT';
const CUSTOM = 'CUSTOM';

const onIncrease = () => ({ type: INCREASEMENT });
const onDecrease = () => ({ type: DECREASEMENT });
const onCustom = (input) => ({ type: CUSTOM, input: input });

export default {
    INCREASEMENT, DECREASEMENT, CUSTOM,
    onIncrease, onDecrease, onCustom
};