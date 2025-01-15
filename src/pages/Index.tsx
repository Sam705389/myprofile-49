import { MemberList } from "@/components/MemberList";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/lovable-uploads/29ae0bf3-ef96-4b9c-a983-ff10498c750a.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      />
      
      <div className="relative z-10">
        <MemberList />
      </div>
    </div>
  );
};

export default Index;