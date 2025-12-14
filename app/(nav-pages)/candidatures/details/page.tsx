import Tag from "@/components/ui/tag";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/breadcrumb";

export default function CandidatureDetailsPage() {
    return (
        <div className="min-h-screen w-full bg-white">
            <Breadcrumb items={[
                { label: "Accueil", href: "/" },
                { label: "Candidatures", href: "/candidatures" },
                { label: "Détails", href: "#" }
            ]} />

            <section className="w-full mx-auto py-20 px-15 bg-yellow-50">
                <div className="max-w-7xl mx-auto">
                    <h1 className="font-bold font-display text-4xl md:text-6xl text-center text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h1>
                </div>
            </section>

            <section className="max-w-7xl mx-auto py-12 px-15">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Description principale */}
                    <div className="flex-1 space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Description du poste</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Responsabilités</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar avec détails */}
                    <div className="w-full lg:w-80 space-y-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Informations clés</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-700">Échéance</h4>
                                    <p className="text-gray-600">31 Décembre 2024</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-700">Domaine</h4>
                                    <p className="text-gray-700 bg-yellow-100 w-fit px-3 py-1 rounded-full text-sm font-medium">
                                        Communication
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-700 mb-2">Compétences requises</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <Tag tagText="Marketing" />
                                        <Tag tagText="Réseaux Sociaux" />
                                        <Tag tagText="Créativité" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary-50 p-6 rounded-lg">
                            <div className="mb-6">
                                <h4 className="text-md font-semibold text-gray-800 mb-3">Partager sur</h4>
                                <div className="flex gap-4 justify-start">
                                    <a href="#facebook" className="text-gray-600 hover:text-primary-600 transition-colors">
                                        <Image src="/icons/facebook.svg" alt="Facebook" width={30} height={30} />
                                    </a>
                                    <a href="#tiktok" className="text-gray-600 hover:text-primary-600 transition-colors">
                                        <Image src="/icons/tiktok.svg" alt="TikTok" width={30} height={30} />
                                    </a>
                                    <a href="#instagram" className="text-gray-600 hover:text-primary-600 transition-colors">
                                        <Image src="/icons/insta.svg" alt="Instagram" width={30} height={30} />
                                    </a>
                                    <a href="#x" className="text-gray-600 hover:text-primary-600 transition-colors">
                                        <Image src="/icons/x.svg" alt="X" width={30} height={30} />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-md font-semibold text-gray-800 mb-3">Postuler</h4>
                                <Link href="/postuler" className="inline-block px-4 py-2 bg-primary-300 text-white rounded-md font-medium transition-all duration-200 hover:rounded-none">
                                    Soumettre ma candidature
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}