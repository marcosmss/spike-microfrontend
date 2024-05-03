import Link from "next/link";

export function Header({ background }) {
    return (
      <header
        style={{
          backgroundColor: background || "#090909",
          color: "white",
          height: "80px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <img
            src="https://www.superbid.net/assets/logo_superbid_nova_marca.svg"
            alt="Logo Superbid Exchange"
            width={145}
            height={49}
            style={{
              margin: "13px 0px 5.72px 0px",
              maxWidth: "145px",
              maxHeight: "49px",
            }}
          />
        </Link>
        <ul style={{ width: 250, display: "flex", justifyContent: "space-between" }}>
          <li>Como comprar</li>
          <li>Ajuda</li>
          <li>Entrar</li>
        </ul>
      </header>
    );
  }