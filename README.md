# Criação de projetos React
    * npx create-react-app name-of-your-project
    * npx create-react-app name-of-your-project --template typescript
    * npm create vite@latest
# Ultimo visto
    * https://www.udemy.com/course/react-e-typescript/learn/lecture/21312554#questions
# Dependencies
    * npm install --save styled-components
    * npm install --save @types/styled-components
    * npm install react-switch
    * npm install --save react-icons
    * npm install --save @types/react-router-dom
    * npm install --save uuid
# Observações
    * Aula 22 carrega as informações no Page List

### Criação do projeto versão original do React 16, 
### Atualizado para React 18
```sh
    npm create vite@latest
```
    * styled-components  e types
```sh
    npm i styled-components@5 @types/styled-components
```
    * react icons e types
```sh
    npm i react-icons @types/react-icons
```
    * react icons biblioteca consultar icons
```sh
    https://react-icons.github.io/react-icons/icons?name=md
```

### Problemas Encontrados
    * Video N. 49, Pasta src / hooks/auth.tsx
    * Descrição do problema falta de interface para children
```sh
    https://www.udemy.com/course/react-e-typescript/learn/lecture/21363954#overview
```
    * link Solução
```sh
    https://stackoverflow.com/questions/59106742/typescript-error-property-children-does-not-exist-on-type-reactnode
```

### Git Comandos

* Cria um novo branch
```
git checkout -b "novoBranch"
```

* lista e mostra o branch atual
```
git branch
```

* munda de branch
```
git checkout main
```

* push na branch desejada
```
git push origin novoBranch
```

* comando para unir o código atual com a outra branch
```
git merge novoBranch
```

* comando para sincronizar repositorio
```
git pull
```
