import { useEffect, useState } from "react";
import { getUsers } from "../services/user";
import { Mail, Phone, Globe, User as UserIcon } from "lucide-react";

export default function Team() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data.users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <header className="relative bg-gray-900 shadow-xl after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-0 after:border-y after:border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Team Members
          </h1>
          <p className="mt-2 text-gray-400">
            Meet our talented squad of developers and designers.
          </p>
        </div>
      </header>
      <main className="flex-1 w-full bg-black min-h-screen">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {loading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          )}

          {error && (
            <div className="rounded-md bg-red-900/50 p-4 border border-red-800">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-200">
                    Error loading team
                  </h3>
                  <div className="mt-2 text-sm text-red-300">
                    <p>{error}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-gray-900 border border-white/10 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-50 transition-opacity group-hover:opacity-100">
                    <div className="h-16 w-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-2xl rounded-full"></div>
                  </div>

                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center border border-white/5 shadow-inner">
                        <UserIcon className="h-6 w-6 text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                          {user.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          @{user.username}
                        </p>
                      </div>
                    </div>

                    <div className="mt-2 space-y-3">
                      <a
                        href={`mailto:${user.email}`}
                        className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span className="truncate">{user.email}</span>
                      </a>
                      <a
                        href={`tel:${user.phone}`}
                        className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="truncate">{user.phone}</span>
                      </a>
                      <a
                        href={`http://${user.website}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        <Globe className="h-4 w-4 text-gray-500" />
                        <span className="truncate">{user.website}</span>
                      </a>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 px-6 py-4 flex items-center justify-between border-t border-white/5 group-hover:bg-gray-800/80 transition-colors">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </span>
                    <span className="text-xs font-medium text-indigo-400">
                      {user.company?.name || "Freelance"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
