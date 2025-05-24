function findMentions(): number[] {
    let csCount = 0, javaCount = 0, jsCount = 0, pyCount = 0;
    const all = document.querySelectorAll("*");

    all.forEach(el => {
        const text: string = el.textContent || "";

        if (text.includes("C#"))
            csCount++;

        if (text.includes("Javascript") || text.includes("Typescript"))
            jsCount++;

        if (text.includes("Java"))
            javaCount++;

        if (text.includes("Python"))
            pyCount++;

        console.log(el)
    });

    return [csCount, javaCount, jsCount, pyCount];
}

export default findMentions;