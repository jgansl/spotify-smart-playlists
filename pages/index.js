import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "../scripts/smartshuffle";

//https://maikelveen.com/blog/how-to-solve-module-not-found-cant-resolve-fs-in-nextjs

export default function Home() {
  // function fetchPlaylists() {}
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className="container">
          <div className="one">
            <h1>Smart Shuffle</h1>
            Spotify playlist order optimisation tool: Log in to rearrange your
            public playlists according to BPM, key and mood.
            <br />
            <br />
            <i>Powered by Spotify</i>
            <br />
            <br />
            <a id="loginLink" className="loginbutton">
              Login
            </a>
            <br />
            <br />
            <form id="fetchPlaylistsButtonElement">
              <input
                type="button"
                className="button"
                onClick={fetchPlaylists}
                value="Load my playlists"
              />
            </form>
            <table id="playlistTable">
              {[0, 1, 2, 3, 4, 5].forEach((num) => (
                <tr>
                  <td>
                    <form>
                      <input
                        type="button"
                        className="playlistbutton"
                        id={`playlistbutton${num}`}
                        onClick={() => fetchPlaylistTracks(num)}
                        value="> Select <"
                      />
                    </form>
                  </td>
                  <td id={`playlist${i}`}></td>
                </tr>
              ))}
            </table>
            <table id="playlistControlTable">
              <tr>
                <td>
                  <form>
                    <input
                      type="button"
                      className="playlistbutton"
                      onClick={() => fetchPlaylists(previousPlaylistPage)}
                      value="< Previous"
                    />
                  </form>
                </td>
                <td>
                  <form>
                    <input
                      type="button"
                      className="playlistbutton"
                      onClick={() => fetchPlaylists(nextPlaylistPage)}
                      value="Next >"
                    />
                  </form>
                </td>
              </tr>
            </table>
            <br />
            <form id="optimiseButtonElement">
              <input
                type="button"
                className="reorderbutton"
                onClick={() => createNewPlaylist()}
                value="Optimise"
              />
            </form>
            <br />
            <i id="warning"></i>
            <br />
          </div>
          {/* <!-- right container --> */}
          <div className="two">
            <div id="graphic"></div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
