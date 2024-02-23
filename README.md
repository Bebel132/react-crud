
# Simple Crud

Um CRUD feito e react e json-server com o intuito de estudar conceitos de react, api, requisições, etc.

# Json-Server

No código, o react está rodando na porta 3000 e o json-server no 3001, atenção na hora de rodar o json-server e o npm

```bash
  npm start
  npx json-server --watch db.json -p 3001
```

```js
  useEffect(() => {
        fetch('http://localhost:3001/list')
            .then(response => response.json())
            .then(data => setList(data));
    }, []);
```

