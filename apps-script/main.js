const doGet = (e) => {
    return HtmlService.createTemplateFromFile("index.html")
      .evaluate()
      .addMetaTag("viewport", "width=device-width, initial-scale=1.0");
}