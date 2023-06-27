import './CardOpenCall.css'
import '../Buttons/Buttons.css'
import '../Forms/Forms.css'

function CardOpenCall() {
    return (
        <>
         <section className='FormGeral'>
            <div className='AbrirChamado'>
                <p>Abrir novo chamado</p>
            </div>
            <div>
                <form className='Form' action="#" method='post' autoComplete='on'>
                    <div className='departamento'>
                        <label htmlFor="">Departamento</label>
                        <br/>
                       <input className='PlaceholderTwo LabelDepartamentos' placeholder='Selecione' type="text" name="" id="" list='lstDep'/>
                        <datalist id='lstDep'>
                            <option value="Construção"></option>
                            <option value="Engenharia"></option>
                            <option value="Arquitetura"></option>
                        </datalist>
                    </div>

                    <div className='assunto'>
                        <label htmlFor="">Assunto</label>
                        <br/>
                        <input className='PlaceholderTwo' type="text" />
                    </div>

                    <div className='anexar'>
                        <label className='LabelAnexar' htmlFor="">Anexar imagem ou arquivo</label>
                        <br/>
                        <div className='anexarLabel'>
                            <input className='PlaceholderAnexar' type="text" placeholder='Buscar no computador' name="" id="" />
                            <label className='ButtonSucessTwo' for='labelFil' htmlFor="">Anexar</label>
                            <input type="file" id="labelFil" />
                        </div>
                        <p>Caso haja alguma mensagem de <br/> erro, por favor anexe uma imagem</p>
                    </div> 

                    <div className='solici'>
                        <label className='LabelSolicitacoes' htmlFor="">Solicitações</label>
                        <br />
                        <textarea placeholder='Escreva seu chamado aqui' className='textArea' name="" id="" cols="1" rows="14"></textarea>
                        <p>Para agilizar o atendimento, explique de forma <br /> detalhada sua solicitação</p>
                    </div> 

                    <div className='botoes'>
                    <button className='ButtonSucessTwo'>Cancelar</button>
                    <button className='ButtonSucessOne' type="submit">Abrir novo chamado</button>
                </div>           
                </form> 
            </div>
         </section>
        </>
        
    )
}

export default CardOpenCall
