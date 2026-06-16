<script module>
  import { preventDefault } from "svelte/legacy";

  let email = $state()
  let password = $state()
  let name = $state()

  const handlerSubmit = () => {
    const body = JSON.stringify({
      email,
      password,
    })
    fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body,
    });
  };
</script>

<form method="POST" onsubmit={preventDefault(handlerSubmit)}>
  <div>
    <label for="text">Nombre</label>
    <input
      class="" 
      type="text"
      name="text"
      id="text"
      bind:value={name}
    />
  </div>
  <div>
    <label for="email">Email</label>
    <input
      class="" 
      type="email"
      name="email"
      id="email"
      bind:value={email}
    />
  </div>
  <div>
    <label for="password">Contraseña</label>
    <input
      class=""
      type="password"
      name="password"
      id="password"
      bind:value={password}
    />
  </div>
  <button type="submit">Iniciar Sesión</button>
</form>
