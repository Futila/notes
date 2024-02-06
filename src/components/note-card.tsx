export function NoteCard() {
  return (
    <button className="bg-slate-800 text-left rounded-md p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-offset-lime-400">
      <span className="font-medium text-sm text-slate-300">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus
        harum enim ut modi veniam nesciunt perferendis deserunt asperiores iste,
        repellendus dolorem nostrum deleniti amet hic officiis praesentium
        exercitationem dignissimos. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Mollitia sunt quas, amet dolorum est id laborum
        architecto! Quaerat vero placeat odit sint rerum adipisci natus
        voluptates ratione id. Consectetur, cumque.
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
    </button>
  );
}
