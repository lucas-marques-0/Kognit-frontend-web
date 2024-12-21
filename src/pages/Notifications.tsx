import React, { useEffect, useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import "./Notifications.css";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na resposta da API");
        }
        return response.json();
      })
      .then((data) => setNotifications(data))
      .catch((error) => console.error("Erro ao buscar notificações:", error))
      .finally(() => setLoading(false));
  }, []);

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="notifications-modal">
      <div className="notifications-header">
        <h2>Notificações</h2>
        <button className="clear-btn" onClick={clearAllNotifications}>
          Limpar
        </button>
      </div>
      {loading ? (
        <p>Carregando...</p>
      ) : notifications.length === 0 ? (
        <p>Sem notificações!</p>
      ) : (
        <ul>
          {notifications.map((notification: any) => (
            <li key={notification.id}>
              <div className="notification-content">
                <strong>{notification.title}</strong>
                <p>{notification.body}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeNotification(notification.id)}
              >
                <FaRegTimesCircle />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
