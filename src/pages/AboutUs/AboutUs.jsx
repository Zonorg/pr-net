//imports
import "./us.css";
import { useState } from "react";

const Us = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleIconClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="usDiv">
      <main>
        <h2>Nosotros</h2>
        <div className="infoDiv">
          <div className="iconContainer">
            <div className="titleDiv">
              <i
                className={`fas ${
                  activeSection === "empresa" ? "fa-minus" : "fa-plus"
                }`}
                onClick={() => handleIconClick("empresa")}
              ></i>
              <h3>Nuestra empresa</h3>
            </div>

            {activeSection === "empresa" && (
              <div className="info">
                  <img className="logoUs" src="/img/logo.png" alt="logo" />
                <p>
                  Somos una empresa de desarrolladores especializados en
                  servicios de hacking ético. Nuestra misión es ayudar a las
                  pequeñas y medianas empresas (pymes) a fortalecer su seguridad
                  cibernética, ya que entendemos que estas suelen tener recursos
                  limitados para hacer frente a los crecientes ataques
                  cibernéticos en el mundo actual.
                </p>
                <p>
                  En un entorno digital cada vez más complejo, reconocemos los
                  desafíos a los que se enfrentan las pymes para proteger su
                  información confidencial y salvaguardar la continuidad de sus
                  operaciones. Con nuestro enfoque ético, trabajamos en estrecha
                  colaboración con las pymes para identificar y resolver
                  vulnerabilidades de seguridad, minimizando así los riesgos y
                  las posibles brechas en sus sistemas.
                </p>
                <p>
                  Nuestro equipo de expertos en hacking ético posee una amplia
                  experiencia en el campo de la seguridad cibernética.
                  Utilizamos metodologías y herramientas avanzadas para realizar
                  evaluaciones exhaustivas de los sistemas y redes de las pymes.
                  A través de nuestras auditorías de seguridad, pruebas de
                  penetración y evaluaciones de aplicaciones móviles,
                  identificamos y analizamos posibles vulnerabilidades,
                  ofreciendo recomendaciones personalizadas para mejorar la
                  seguridad de manera efectiva.
                </p>
              </div>
            )}
          </div>

          <div className="iconContainer">
            <div className="titleDiv">
              <i
                className={`fas ${
                  activeSection === "hacking" ? "fa-minus" : "fa-plus"
                }`}
                onClick={() => handleIconClick("hacking")}
              ></i>
              <h3>¿Qué es el hacking ético?</h3>
            </div>

            {activeSection === "hacking" && (
              <div className="info">
                <p>
                  El término de hacking ético es cada vez más popular, se trata
                  de una práctica a la que muchas empresas tecnológicas o con un
                  nivel de digitalización elevado suelen recurrir. La piratería
                  ética efectiva se basa en el conocimiento de la red del
                  sistema, el equipo, la interacción del usuario, las políticas,
                  los procedimientos, la seguridad física y la cultura
                  empresarial. A partir de esta conjetura se podría definir qué
                  es el hacking ético.
                </p>
                <p>
                  La protección de los sistemas y redes actuales requiere una
                  comprensión amplia de las estrategias de ataque y un
                  conocimiento profundo de las tácticas, herramientas y
                  motivaciones del pirata informático. El creciente uso de
                  metodologías de ataque de ingeniería social exige que cada
                  probador sea consciente de la organización y los hábitos de
                  sus usuarios de TI (personal).
                </p>
                <p>
                  Hacking ético se define a través de lo que hacen los
                  profesionales que se dedican a ello, es decir, los piratas
                  informáticos éticos, que no recurren a estas prácticas con
                  fines delictivos, tradicionalmente asociados a estas acciones.
                  Estas personas son contratadas para hackear un sistema e
                  identificar y reparar posibles vulnerabilidades, lo que
                  previene eficazmente la explotación por hackers maliciosos.
                  Son expertos que se especializan en las pruebas de penetración
                  de sistemas informáticos y de software con el fin de evaluar,
                  fortalecer y mejorar la seguridad. Podemos decir que se
                  encargan de implementar un hackeo ético para poner a prueba la
                  seguridad del sistema.
                </p>
              </div>
            )}
          </div>

          <div className="iconContainer">
            <div className="titleDiv">
              <i
                className={`fas ${
                  activeSection === "benefits" ? "fa-minus" : "fa-plus"
                }`}
                onClick={() => handleIconClick("benefits")}
              ></i>{" "}
              <h3>Beneficios del Hacking Ético para las empresas</h3>
            </div>

            {activeSection === "benefits" && (
              <div className="info">
                <p>
                  El hacking ético te brinda múltiples beneficios. Algunos de
                  los principales son:
                </p>
                <ul>
                  <li>
                    Ahorrar dinero en la implementación de sistemas de seguridad
                    eficientes.
                  </li>
                  <li>
                    Impedir catástrofes públicas por ser víctima de algún ataque
                    hacker fuerte.
                  </li>
                  <li>
                    Organizar y mantener los sistemas de ciberseguridad para
                    evitar filtraciones.
                  </li>
                  <li>
                    Focalizar las inversiones en seguridad eficientemente y no
                    malgastar en sistemas con fallas.
                  </li>
                  <li>
                    Concientizar a todos los colaboradores sobre la importancia
                    que supone poner en riesgo los sistemas por el mal uso de
                    contraseñas poco seguras.
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="iconContainer">
            <div className="titleDiv">
              <i
                className={`fas ${
                  activeSection === "fases" ? "fa-minus" : "fa-plus"
                }`}
                onClick={() => handleIconClick("fases")}
              ></i>{" "}
              <h3>Fases de nuestros servicios</h3>
            </div>

            {activeSection === "fases" && (
              <div className="info">
                <p>
                  <u>1. Firma del acuerdo:</u> Lo primero que tiene que hacer el
                  profesional en hacking ético es firmar un acuerdo, en
                  colaboración con la empresa que lo contrate, en el que se
                  detalle con lujo de detalles lo que va a realizar. El producto
                  final debe ser un documento que contenga todas las bases de
                  colaboración para que quede por escrito que la compañía está
                  dando vía libre a este especialista para que trate de superar
                  sus sistemas de seguridad sin una mala intención detrás. El
                  hacker debe dejar bien claro a la organización lo que va a
                  hacer para poner a prueba sus sistemas, pues algunas acciones
                  pueden suponer ataques simulados que pueden resultar confusos
                  para las empresas si no saben de antemano los movimientos que
                  hará el profesional en hacking ético.
                </p>
                <p>
                  <u>2. Investigación de los sistemas:</u> Cuando se haya
                  firmado el contrato, ya se puede iniciar con la etapa 2, que
                  es de investigación para profundizar de manera exhaustiva en
                  los servidores y sistemas de la empresa poniendo énfasis en
                  descubrir todas las vías posibles de acceso a ellos. En este
                  punto el especialista echa mano de todos los programas y
                  herramientas que tiene a su disposición con el fin de entrar a
                  fondo en la compañía para encontrar qué está fallando o qué
                  elementos no están lo suficientemente protegidos. Algunos de
                  los datos que va a intentar robar el especialista en hacking
                  ético son información personal de los ejecutivos y empleados,
                  cuentas bancarias, estadísticas, información confidencial,
                  detalles sobre softwares y apps instaladas, entre otros
                  elementos que son clave para el funcionamiento de una empresa.
                </p>
                <p>
                  <u>3. Preparación de un plan de ataque:</u> El siguiente paso
                  que debe dar el profesional es trabajar en un plan de ataque
                  que refleje todas las posibilidades por las que pueden optar
                  los hackers malintencionados para infiltrarse en los datos y
                  el entorno de la empresa. En este plan de ataque deben
                  incluirse todos los detalles para que la empresa que contrató
                  al experto en hacking ético sepa a qué se está exponiendo con
                  el sistema de ciberseguridad que tiene actualmente. Este punto
                  está íntimamente ligado con el que sigue, pues es el resultado
                  de la puesta en marcha del plan elaborado en el tercer paso.
                </p>
                <p>
                  <u>4. Detección de vías de acceso y vulnerabilidades:</u>{" "}
                  Cuando se haya concluido con el plan de ataque, el resultado
                  va a ser una lista de todas las vías posibles de acceso, así
                  como las vulnerabilidades de la agencia en cuestión. Aquí el
                  profesional en hacking ético debe únicamente buscar todas las
                  entradas del sistema a fondo e idear diferentes modos de
                  tratar de acceder a él, tal como lo haría un delincuente de la
                  información. En este punto todo se queda en teorías e
                  investigación. Cuando se pone en práctica es el quinto y
                  último paso.
                </p>
                <p>
                  <u>
                    {" "}
                    5. Ejecución de la teoría y prueba de resistencia en
                    seguridad:
                  </u>{" "}
                  La última fase del hacking ético consiste en poner en marcha
                  todos los ataques que el profesional planteó para comprobar
                  que sus investigaciones e hipótesis son ciertas.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Us;
