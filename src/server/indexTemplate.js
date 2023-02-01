export const indexTemplate = (content, token) => `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script defer src="/static/client.js"></script>
    <script >
    window.__token__ = '${token}'
    </script>
    <title>Site</title>
</head>
<body>
<div id="react__root">${content}</div>
<div id="modal__root"></div>
</body>
</html>`;