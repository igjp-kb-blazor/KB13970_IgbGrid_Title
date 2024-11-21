igRegisterScript("JobTitleTemplate", (context) => {
    const column = context.column;
    const span = document.createElement("span");
    span.textContent = column._header;
    span.title = `HeaderTemplateScript の title 属性より\nツールチップの内容を変更します`;
    return span;
}, false);