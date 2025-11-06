"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Header from "../components/sections/Header";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const prefersReducedMotion = useReducedMotion();

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
        },
      ]);
      setInputValue("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const todoItemVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
      y: -20,
      rotateX: -15,
    },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.8,
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      }
    }
  };

  const checkboxVariants = {
    checked: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    unchecked: {
      scale: 1,
      rotate: 0,
    }
  };

  const checkmarkVariants = {
    checked: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 0.6, bounce: 0 },
        opacity: { duration: 0.2 }
      }
    },
    unchecked: {
      pathLength: 0,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const statsVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.15, 1],
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 0 rgba(99, 102, 241, 0.7)",
        "0 0 0 10px rgba(99, 102, 241, 0)",
        "0 0 0 0 rgba(99, 102, 241, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <motion.main
        className="max-w-5xl mx-auto px-6 lg:px-8 py-16 lg:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.1
            }}
          >
            <motion.span
              className="inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundImage: "linear-gradient(90deg, currentColor 0%, hsl(238.7324 83.5294% 66.6667%) 50%, currentColor 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Todo List
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Organize your tasks and boost your productivity
          </motion.p>
        </motion.div>

        {/* Input Section */}
        <motion.div
          className="bg-card rounded-[1.25rem] shadow-2xl border border-border p-8 mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="flex gap-2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <motion.input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add a new task..."
              className="flex-1 h-12 px-4 bg-background border border-input rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              whileFocus={{
                scale: 1.01,
                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.button
              onClick={addTodo}
              className="px-8 h-12 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg font-medium inline-flex items-center justify-center gap-2"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Add
              <motion.svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: inputValue ? 0 : 360 }}
                transition={{ duration: 0.5 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </motion.svg>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-4 mt-6 text-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              key={`total-${todos.length}`}
              className="inline-flex items-center rounded-full px-3 py-1.5 bg-primary/10 text-primary font-medium"
              variants={statsVariants}
              initial="initial"
              animate="animate"
            >
              Total: {todos.length}
            </motion.div>
            <motion.div
              key={`active-${activeTodos.length}`}
              className="inline-flex items-center rounded-full px-3 py-1.5 bg-secondary/50 text-secondary-foreground font-medium"
              variants={statsVariants}
              initial="initial"
              animate="animate"
            >
              Active: {activeTodos.length}
            </motion.div>
            <motion.div
              key={`completed-${completedTodos.length}`}
              className="inline-flex items-center rounded-full px-3 py-1.5 bg-accent text-foreground font-medium"
              variants={statsVariants}
              initial="initial"
              animate="animate"
            >
              Completed: {completedTodos.length}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Todo List */}
        <motion.div
          className="space-y-6"
          variants={itemVariants}
        >
          {/* Active Todos */}
          <AnimatePresence mode="wait">
            {activeTodos.length > 0 && (
              <motion.div
                className="bg-card rounded-[1.25rem] shadow-lg border border-border overflow-hidden"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div
                  className="px-6 py-4 border-b border-border bg-muted"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      ⚡
                    </motion.span>
                    Active Tasks
                  </h2>
                </motion.div>
                <div className="p-4 space-y-2">
                  <AnimatePresence mode="popLayout">
                    {activeTodos.map((todo, index) => (
                      <motion.div
                        key={todo.id}
                        className="flex items-center gap-3 p-4 border border-border rounded-lg bg-card/50 hover:bg-card transition-colors group cursor-pointer"
                        variants={todoItemVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        whileHover="hover"
                        layout
                        layoutId={`todo-${todo.id}`}
                        custom={index}
                      >
                        <motion.button
                          onClick={() => toggleTodo(todo.id)}
                          className="w-5 h-5 rounded border-2 border-border hover:border-primary transition-colors flex-shrink-0 relative overflow-hidden"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-primary"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          />
                        </motion.button>
                        <motion.span
                          className="flex-1 text-sm text-foreground"
                          layout
                        >
                          {todo.text}
                        </motion.span>
                        <motion.button
                          onClick={() => deleteTodo(todo.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 rounded-lg bg-destructive/10 hover:bg-destructive/20 flex items-center justify-center"
                          whileHover={{
                            scale: 1.1,
                            rotate: 5
                          }}
                          whileTap={{ scale: 0.9, rotate: -5 }}
                        >
                          <svg
                            className="w-4 h-4 text-destructive"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </motion.button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Completed Todos */}
          <AnimatePresence mode="wait">
            {completedTodos.length > 0 && (
              <motion.div
                className="bg-card rounded-[1.25rem] shadow-lg border border-border overflow-hidden"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div
                  className="px-6 py-4 border-b border-border bg-muted"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <motion.span
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0]
                      }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      ✓
                    </motion.span>
                    Completed Tasks
                  </h2>
                </motion.div>
                <div className="p-4 space-y-2">
                  <AnimatePresence mode="popLayout">
                    {completedTodos.map((todo, index) => (
                      <motion.div
                        key={todo.id}
                        className="flex items-center gap-3 p-4 border border-border rounded-lg bg-card/50 hover:bg-card transition-colors group cursor-pointer"
                        variants={todoItemVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        whileHover="hover"
                        layout
                        layoutId={`todo-${todo.id}`}
                        custom={index}
                      >
                        <motion.button
                          onClick={() => toggleTodo(todo.id)}
                          className="w-5 h-5 rounded border-2 border-primary bg-primary flex-shrink-0 flex items-center justify-center relative"
                          variants={checkboxVariants}
                          animate="checked"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                          <motion.svg
                            className="w-3 h-3 text-primary-foreground absolute"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            initial="unchecked"
                            animate="checked"
                            variants={checkmarkVariants}
                          >
                            <motion.path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </motion.svg>
                        </motion.button>
                        <motion.span
                          className="flex-1 text-sm text-muted-foreground line-through"
                          layout
                        >
                          {todo.text}
                        </motion.span>
                        <motion.button
                          onClick={() => deleteTodo(todo.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 rounded-lg bg-destructive/10 hover:bg-destructive/20 flex items-center justify-center"
                          whileHover={{
                            scale: 1.1,
                            rotate: 5
                          }}
                          whileTap={{ scale: 0.9, rotate: -5 }}
                        >
                          <svg
                            className="w-4 h-4 text-destructive"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </motion.button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          <AnimatePresence mode="wait">
            {todos.length === 0 && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center"
                  variants={floatingVariants}
                  animate="float"
                >
                  <motion.svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </motion.svg>
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold text-foreground mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  No tasks yet
                </motion.h3>
                <motion.p
                  className="text-muted-foreground"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Add your first task to get started
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.main>
    </div>
  );
}
