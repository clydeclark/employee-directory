function toggleSort(props) {
    let reverse = props.reverse;
    if (reverse) {
        props.setReverse(false);
    } else {
        props.setReverse(true);
    }
}

export default toggleSort;