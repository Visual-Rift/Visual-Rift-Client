import { useCallback, useState } from "react";
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
} from "reactflow";

// STYLES IMPORTS

import styles from "./HomePage.module.css";
const { mainDiv, customSideBar, leftSideBar, rightSideBar } = styles;
import "reactflow/dist/style.css";

// COMPONENTS IMPORTS

import ImageNode from "../../components/ImageNode/ImageNode";
import ToolIcon from "../../components/ToolIcon/ToolIcon";
import SideBar from "../../components/SideBar/ServicesBar";
import ConfigurationBar from "../../components/ConfigurationBar/ConfigurationBar";
import Logger from "../../components/Logger/Logger";

// NODE TYPES

const nodeTypes = {
  imageNode: ImageNode,
  toolIcon: ToolIcon,
};

// INITIAL NODES AND EDGES

const initialNodes = [
  {
    id: "app",
    type: "toolIcon",
    data: {
      image: {
        url: "/icons/pc.png",
        alt: "app",
      },
      text: "app",
      id: "app",
    },
    position: { x: 0, y: 0 },
  },
];

const initialEdges = [];

// MAIN COMPONENT

const HomePage = () => {
  const reactFlowInstance = useReactFlow();

  // HELPER HOOKS TO CREATE NODES AND EDGES
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // CALLBACKS TO HANDLE CONNECTIONS

  const onConnect = useCallback(
    (connection) =>
      setEdges((eds) => addEdge({ ...connection, animated: false }, eds)),
    [setEdges]
  );

  // STATE TO STORE SELECTED SERVICE

  const [selectedService, setSelectedService] = useState({
    serviceName: "",
    serviceImgUrl: "",
  });

  // STATE TO STORE SELECTED NODE
  const [selectedNode, setSelectedNode] = useState(null);

  // FUNCTION TO ADD NEW NODE

  const addNewNode = (event, serviceName, serviceImgUrl) => {
    if (serviceName === "" || serviceImgUrl === "") {
      return;
    }

    const reactFlowPosition = reactFlowInstance.screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });

    const newNode = {
      id: `${serviceName}_${Math.random().toString(36).substring(2)}`,
      type: "toolIcon",
      data: {
        image: {
          url: serviceImgUrl,
          alt: serviceName,
        },
        text: serviceName,
        id: `${serviceName}_${Math.random().toString(36).substring(2)}`,
      },
      position: { x: reactFlowPosition.x - 50, y: reactFlowPosition.y - 40 },
    };

    setNodes([...nodes, newNode]);
    setSelectedService({ serviceName: "", serviceImgUrl: "" });
  };

  return (
    <div
      className={mainDiv}
      id="react-flow-container"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className={[customSideBar, leftSideBar].join(" ")}>
        <SideBar setSelectedService={setSelectedService} />
      </div>
      <div className={[customSideBar, rightSideBar].join(" ")}>
        <ConfigurationBar selectedNode={selectedNode} />
      </div>
      <div>
        <Logger/>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={(node) => setSelectedNode(node)}
        fitView
        fitViewOptions={{ padding: 0 }}
        defaultEdgeOptions={{ animated: true }}
        nodeTypes={nodeTypes}
        attributionPosition="top-right"
        onClick={(event) =>
          addNewNode(
            event,
            selectedService.serviceName,
            selectedService.serviceImgUrl
          )
        }
      >
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default HomePage;
