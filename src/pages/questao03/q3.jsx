import React, { useState } from "react";
import styles from "./q3.module.css";
import { Input } from "../../components/Input/input";
import { Button } from "../../components/Button/button";

export function Questao03() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() !== "") {
      setTarefas([...tarefas, tarefa.trim()]);
      setTarefa("");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Adicione suas tarefas</h2>

      <div className={styles.inputContainer}>
        <Input type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value)} placeholder="Digite uma tarefa" />
        <Button onClick={adicionarTarefa} title="Adicionar" />
      </div>

      {tarefas.length > 0 && (
        <div>
          <h3 className={styles.subtitle}>Tarefas Adicionadas</h3>
          <ul className={styles.taskList}>
            {tarefas.map((item, index) => (
              <li key={index} className={styles.taskItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
