import React from "react";
import "./style.css";

//IMAGENS DO FOOTER
import logo from "../../assets/image/logoAzul.png";
import fonte from "../../assets/image/fonteAzul.png"

import Footer from "../../components/Footer";
import NavBarLogoColor from "../../components/Header/NavBarLogoColor";
function TermosDeUso() {


    const temaBg = {
        backgroundColor:  "var(--bgcolor3)",
        color:  "black"
    }


    return (
        <div style={temaBg}>
            
            <NavBarLogoColor />
            <div className="container" >
                <div className="row termos">
                    <div className="col-md-12">

                        <h1>Termos de Uso</h1>
                        <p>Bem-vindo(a) a SATUS SPACE, a plataforma de ensino de tecnologia, bootcamps e capacitação, conectando pessoas de +40 anos com oportunidades de carreira nas empresas no mercado de trabalho. Nossa missão é desenvolver pessoas com mais de +40 anos que almejam trabalhar no ramo da tecnologia.</p>
                        <p>Por favor, leia todo estes Termos de Uso com muita atenção. Antes de usar a SATUS SPACE, certifique-se de que compreendeu todas as condições aqui estabelecidas, em especial, mas não exclusivamente. Após ler, compreender e concordar com todo os Termos de Uso, você poderá optar por aderir a ele. Saiba que a utilização da SATUS SPACE implica a aceitação plena e sem reservas de todos os termos e condições previstos neste documento. Você também declara ser capaz de celebrar contratos de emprego, de prestação de serviços e/ou de qualquer outra natureza jurídica.</p>
                        <p>Ao acessar e utilizar a Plataforma <a href='https://satusspace.vercel.app'>SatusSpace</a>, você expressa sua concordância e consentimento com todos os termos apresentados nesse documento de Termos de Uso. O uso continuado dos nossos serviços constitui a aceitação de quaisquer alterações ou modificações feitas nos Termos de Uso</p>
                        <p>Você concorda em não usar o Site, ou Conteúdo fornecido através do Site, para qualquer finalidade que seja ilegal ou proibida por estes Termos de Uso ou pelas regras, diretrizes ou termos de uso postados para um determinado área do Site ou Conteúdo fornecido no Site ou através dele.</p>

                        <p>O Utilizador declara autorizar, a título gratuito, a divulgação, publicação, utilização e exploração dos conteúdos, textos, dados, imagens ou programas por si enviados para a Satus Space</p>

                        <p>A Satus Space não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por SatusSpace do site. O uso de qualquer site vinculado é por conta e risco do usuário</p>

                        <p>Você não deve tentar nem apoiar as tentativas de terceiros para driblar, reverter a engenharia, decodificar, decompilar, desmontar ou fraudar ou interferir de qualquer forma com aspectos da Plataforma. Você concorda em não vender, aleterar o Conteúdo da plataforma Satus Space.</p>

                        <p>Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato com a Satus Space em  SatusSpaceProa@gmail.com</p>

                        <h2>Política de Privacidade</h2>

                        <p>Como parte das nossas operações diárias, necessitamos coletar dados pessoais de nossos usuários e potenciais usuários com o intuito de fornecer os nossos cursos e serviços alinhados aos valores, interesses e perfil de cada um deles.</p>

                        <p>A privacidade de suas informações é de grande importância para nós, e temos como política respeitar a confidencialidade da informação e a privacidade das pessoas. Esta Política estipula como ocorrem as operações de tratamento de dados pessoais em conformidade com as leis e regulamentações vigentes.</p>

                        <p>A nossa Política de Privacidade é regularmente revisada para assegurar a conformidade com leis, regulamentações e novas tecnologias, refletindo possíveis mudanças nas nossas operações e práticas de negócio. É importante que você acesse regularmente esta política, e que observe a data de atualização informada abaixo.</p>

                        <p>Esta Política de Privacidade aplica-se às atividades de tratamento de dados pessoais de usuários, potenciais usuários, potenciais financiadores e voluntários, candidatos a vagas de cursos, visitantes dos escritórios da Satus Space e visitantes dos nossos Sites.</p>

                        <h3><br />1. CONSIDERAÇÕES GERAIS</h3>
                        <p><br />A Satus Space respeita a privacidade de todos os titulares de dados pessoais, estando, desta forma, comprometido a tomar todas as medidas possíveis para assegurar de maneira razoável a proteção dos dados pessoais coletados.<br /><br />Todas as informações são tratadas de acordo com as leis e regulamentações de proteção de dados aplicáveis.</p>
                        <p>Procedimentos técnicos e organizacionais estão em vigor para garantir que a sua informação esteja sempre segura. Como parte destes procedimentos, regularmente treinamos e conscientizamos todos os nossos colaboradores sobre a importância da manutenção, salvaguarda e respeito da sua informação pessoal e consideramos a violação da privacidade dos dados pessoais algo muito sério, por isso monitoramos constantemente e prevemos medidas disciplinares apropriadas para eventuais descumprimentos.<br /><br />A Satus SPace pode utilizar diferentes formas para coletar dados pessoais, tais como:<br /><br />Quando são fornecidos por meio do preenchimento de formulários e questionários, em situações que incluem, por exemplo, você:</p>
                        <ul>
                            <li>Solicitar cursos ou serviços da Satus Space;</li>
                            <li>Solicitar o envio de materiais informativos ou institucionais;</li>
                            <li>Responder ao questionário de identificação de perfil;</li>
                            <li>Por meio de dados de acesso aos nossos Sites;</li>
                            <li>Por meio de fontes publicamente disponíveis.</li>
                        </ul>

                        <h3><br />2. QUAIS DADOS DE ACESSO SÃO COLETADOS PELOS SITES?</h3>
                        <p><br />Informações coletadas de alunos ao utilizar os Sites incluem, entre outros, o navegador de acesso do usuário; endereço do protocolo de Internet (IP); data e hora do acesso; a localização do usuário; e as ações do usuário no site.<br />Informações coletadas de usuários ao utilizar os Aplicativos incluem, entre outros, o modelo do dispositivo móvel e o sistema operacional utilizado para o acesso; endereço do protocolo de Internet (IP); data e hora do acesso, versão do aplicativo; provedor de conexão do usuário; localização do usuário; e as ações do usuário nos Aplicativos.</p>
                        <h3><br />3. QUAIS INFORMAÇÕES SÃO COLETADAS PELA SATUS SPACE?</h3>
                        <p><br />Para cadastro na plataforma Satus Space, e posterior concessão de acesso a sua conta, os seguintes dados são coletados:</p>
                        <ul>
                            <li>Nome</li>
                            <li>Data de nascimento</li>
                            <li>E-mail</li>
                            <li>Cidade e Estado</li>
                            <li>Telefone</li>
                        </ul>

                        <h3><br />4. POR QUE A SATUS SPACE COLETA E UTILIZA OS SEUS DADOS PESSOAIS?</h3>
                        <p><br />Podemos utilizar a sua informação pessoal para as seguintes finalidades:</p>
                        <p><br /><strong>Para execução dos serviços contratados</strong><br />O uso de seus dados pessoais é necessário para validarmos sua identidade, conceder acesso à nossa plataforma, e desta maneira desempenhar os nossos serviços e cumprir com as nossas obrigações. Utilizaremos as informações para possibilitar o acesso às informações dos cursos ou demais cursos e possibilitar a realização destes cursos.</p>
                        <p><br /><strong>Para envio de comunicados e pesquisas de satisfação</strong><br />Ocasionalmente, podemos enviar-lhe comunicados e pesquisas de satisfação como parte do nosso processo de feedback do usuário. É do nosso legítimo interesse obter tais opiniões para assegurar que os nossos serviços/cursos estão sendo prestados no mais alto nível.</p>
                        <p><strong>Para análise de comportamento e navegação em nossos Sites</strong><br />Os nossos Sites podem conter ferramentas de análise de dados que nos permitam analisar comportamentos. As informações coletadas para esta finalidade são completamente anonimizadas.</p>
                        <p><strong>Para publicidade</strong><br />Podemos utilizar os seus dados pessoais para enviar comunicações de marketing por e-mail, telefone, ou outras formas previamente concordadas (incluindo campanhas em redes sociais) para assegurar que está sempre atualizado sobre os nossos cursos e serviços. Ao enviarmos comunicações de marketing, estas serão baseadas no seu consentimento.</p>
                        <p><strong>Para garantia da segurança patrimonial e da integridade física</strong><br />Caso venha visitar nossas instalações, podemos gravar a sua imagem através do nosso sistema de monitoramento por razões de segurança. Serão coletadas também informações pessoais para providenciar as suas credenciais de acesso, de forma a manter um ambiente de trabalho seguro.</p>
                        <p><br /><strong>Para salvaguarda dos legítimos interesses</strong><br />Processamos dados pessoais para salvaguardar nossos legítimos interesses. Alguns exemplos de tais atividades incluem:</p>
                        <ul>
                            <li>Dar início a reivindicações legais e preparação da nossa defesa em casos de litígio;</li>
                            <li>Meios e processos estabelecidos para proporcionar segurança tecnológica, prevenindo contra potenciais crimes, segurança de ativos, e medidas contra invasão;</li>
                            <li>Realizar análise de movimentações financeiras para elaboração de relatórios estratégicos;</li>
                            <li>Analisar e prevenir contra fraudes.</li>
                            <li>Estabelecer sistemas de monitoramento das nossas instalações, por razões de segurança;</li>
                            <li>Medidas de gestão de negócio, otimização de desempenho da plataforma, e desenvolvimento de cursos e serviços;</li>
                            <li>Partilhar os seus dados pessoais com as empresas parceiras da Satus Space. com intuito de atualizar/verificar as suas informações pessoais de acordo com as leis.</li>
                        </ul>
                        <h3><br />6. TRANSFERÊNCIA INTERNACIONAL DOS DADOS</h3>
                        <p><br />A Satus Space trata as suas informações pessoais em território nacional e em países que possuem legislações semelhantes e equivalentes. Além disso, mantém cláusulas específicas para assegurar o correto tratamento, alinhadas com as leis e regulamentações brasileiras.</p>
                        <h3><br />7. SEGURANÇA E PRIVACIDADE DOS DADOS PESSOAIS</h3>
                        <p><br />A Satus Space implementa medidas protetivas razoáveis contra ameaças físicas, administrativas e técnicas para proteger suas informações pessoais de acesso, uso e divulgação não autorizados. Por exemplo, criptografamos ou anonimizamos certas informações pessoais confidenciais, também exigimos que nossos fornecedores protejam tais informações contra acesso, uso e divulgação não autorizados.</p>
                        <h3><br />8. ARMAZENAMENTO DE INFORMAÇÃO PESSOAL E PERÍODO DE RETENÇÃO</h3>
                        <p><br />A Satus Space deverá manter as suas informações pessoais durante o tempo necessário para cumprir com os fins para os quais as informações são tratadas ou por outros motivos válidos para reter suas informações pessoais, como por exemplo o cumprimento de obrigações legais.</p>
                        <h3><br />9. CONSULTAR SEUS DADOS PESSOAIS</h3>
                        <p><br />Se desejar realizar a consulta dos seus dados pessoais que são tratados em nosso ambiente, acesse a área logada do site. As finalidades para os quais os dados são tratados estão descritas neste documento. Em caso de dúvidas adicionais, encaminhe um e-mail para: SatusSpaceProa@gmail.com</p>
                        <h3><br />10. ALTERAR SEUS DADOS PESSOAIS</h3>
                        <p><br />Se desejar alterar seus dados pessoais, o mesmo poderá ser feito acessando a área logada do site.</p>
                        <h3><br />11. SOLICITAR O CANCELAMENTO DE TRATAMENTO DOS SEUS DADOS PESSOAIS</h3>
                        <p><br />Se desejar que não realizemos mais o processamento da sua informação pessoal, entre em contato via e-mail: SatusSpaceProa@gmail.com.</p>
                        <h3><br />12. CONTATOS</h3>
                        <p><br />Encarregado Pelo Tratamento de Proteção de Dados: Possuímos um responsável pela proteção de dados o qual inspeciona questões relacionadas a esta Política de Privacidade. Caso tenha alguma dúvida sobre como consultar seus dados e exercer seus direitos de titular, nos contate pelo e-mail: SatusSpaceProa@gmail.com.</p>
                        <h3><br />13. AVISO LEGAL</h3>
                        <p><br />A Satus Space não é responsável pelo uso indevido ou perda dos dados pessoais a que não tem acesso ou controle. Ficamos também isentos de responsabilidade diante do uso ilegal e não autorizado dessa informação como consequência de uso indevido ou desvio das suas credenciais de acesso, conduta negligente ou maliciosa como consequência de atos ou omissões da sua parte ou de alguém autorizado em seu nome.</p>
                        <p>&nbsp;</p>
                        
                    </div>
                </div>
            </div>
            
            <Footer
            
                styleComponent={temaBg}
                fonte={fonte}
                logo={logo}
            
            />
        </div>

    )
}

export default TermosDeUso;