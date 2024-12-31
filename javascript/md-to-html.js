function markdownToHtml(markdown) {
    markdown = markdown.replace(/^###### (.*)/gm, "<h6>$1</h6>")
        .replace(/^##### (.*)/gm, "<h5>$1</h5>")
        .replace(/^#### (.*)/gm, "<h4>$1</h4>")
        .replace(/^### (.*)/gm, "<h3>$1</h3>")
        .replace(/^## (.*)/gm, "<h2>$1</h2>")
        .replace(/^# (.*)/gm, "<h1>$1</h1>")
        .replace(/^\- (.*)/gm, "<ul><li>$1</li></ul>")
        .replace(/<\/ul><ul>/gm, "")
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href='$2'>$1</a>")
        .replace(/\n/g, "<br>");

    return markdown;
}

const markdownContent = document.getElementById("markdown-content").innerText;
const htmlContent = markdownToHtml(markdownContent);
document.getElementById("html-output").innerHTML = htmlContent;