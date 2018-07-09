
export const submit = amount => {
    return {
        type: "submit",
        amount: amount,
    };
};

export const display = total => {
	return {
		type: "display",
		total: total,
	}
}