function validateInput(e) {
    const isNumber = /[^\d]/g

    return e.target.value = e.target.value.replace(isNumber, "");
}

export { validateInput }