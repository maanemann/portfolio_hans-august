
const Scene = ({ sceneId, assets }) => {
  return (
    <div className="scene" style={{ backgroundImage: `url(/scenes/${sceneId}.png)`, imageRendering: 'pixelated' }}>
      {assets && assets.map((asset, index) => (
        <div key={index} className="asset" style={{ ...asset.style }} onClick={asset.onClick}>
          {asset.content}
        </div>
      ))}
    </div>
  );
};

export default Scene;

