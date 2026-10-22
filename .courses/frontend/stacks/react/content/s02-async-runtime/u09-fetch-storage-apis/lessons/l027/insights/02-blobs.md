---
id: i02
kind: insight
title: Blob, File и объектный URL
minutes: 3
---

# Blob, File и объектный URL

`Blob` — неизменяемый кусок байтов с MIME-типом. `File` — Blob плюс имя и дата. Поле `<input type="file">` отдаёт `File`, не путь на диске пользователя.

`URL.createObjectURL(blob)` даёт адрес вида `blob:...`, по которому можно поставить превью в `img` или отдать ссылку на скачивание. Адрес держит данные в памяти, пока вы не вызовете `URL.revokeObjectURL`.

`FileReader` и `blob.arrayBuffer()` / `blob.text()` читают байты в JS. Для показа картинки объектный URL обычно дешевле, чем data-URL в base64.

Граница такая: байты файла не становятся «безопасным HTML». Вставлять содержимое файла через `innerHTML` — тот же XSS, что и любая чужая строка.
