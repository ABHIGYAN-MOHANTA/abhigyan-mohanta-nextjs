import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex justify-center items-center ">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold text-center mb-4">
            How to Make a JAR File an Executable Application in Debian/Ubuntu
          </h1>
          <p className="text-lg  leading-relaxed">
            If you are a Java developer, you might have created a JAR file that
            you want to distribute as an executable application. In Ubuntu, you
            can easily make a JAR file an executable application by creating a
            desktop launcher file for it. In this blog post, I will guide you
            through the steps to make a JAR file an executable application in
            Ubuntu.
          </p>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">
              Step 1: Open the Terminal
            </h2>
            <p className=" leading-relaxed">
              Open the terminal on Ubuntu by pressing Ctrl+Alt+T.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">
              Step 2: Navigate to the Directory
            </h2>
            <p className=" leading-relaxed">
              Navigate to the directory where your JAR file is located using the
              cd command. For example, if your JAR file is located in the
              Downloads directory, you can navigate to it by typing the
              following command:
            </p>
            <pre className="bg-gray-200 text-black p-2 rounded-md mt-2">
              <code className="text-sm">$ cd ~/Downloads/</code>
            </pre>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">
              Step 3: Set Executable Permission
            </h2>
            <p className=" leading-relaxed">
              Set the executable permission for the JAR file using the following
              command:
            </p>
            <pre className="bg-gray-200 text-black p-2 rounded-md mt-2">
              <code className="text-sm">$ chmod +x your_jar_file.jar</code>
            </pre>
            <p className=" leading-relaxed mt-2">
              This command gives executable permission to the JAR file.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">
              Step 4: Create a Desktop Launcher
            </h2>
            <p className=" leading-relaxed">
              Create a desktop launcher for your application by creating a new
              file in the ~/.local/share/applications/ directory with the
              .desktop extension.
            </p>
            <pre className="bg-gray-200 text-black p-2 rounded-md mt-2">
              <code className="text-sm">
                $ nano ~/.local/share/applications/myapp.desktop
              </code>
            </pre>
            <p className=" leading-relaxed">
              In the editor, add the following lines:
            </p>
            <pre className="bg-gray-200 text-black p-2 rounded-md mt-2">
              <code className="text-sm">
                [Desktop Entry]
                <br />
                Type=Application
                <br />
                Name=My Application
                <br />
                Exec=/usr/bin/java -jar /path/to/your_jar_file.jar
                <br />
                Icon=/path/to/your_icon_file.png
              </code>
            </pre>
            <p className=" leading-relaxed">
              Here, replace &quot;My Application&quot; with the name of your
              application, &quot;/path/to/your_jar_file.jar&quot; with the
              actual path to your JAR file, and
              &quot;/path/to/your_icon_file.png&quot; with the actual path to
              your application icon file.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">
              Step 5: Make the Launcher Executable
            </h2>
            <p className=" leading-relaxed">
              Make the launcher executable using the following command:
            </p>
            <pre className="bg-gray-200 text-black p-2 rounded-md mt-2">
              <code className="text-sm">
                $ chmod +x ~/.local/share/applications/myapp.desktop
              </code>
            </pre>
            <p className=" leading-relaxed mt-2">
              This command gives executable permission to the launcher file.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">
              Step 6: Launch the Application
            </h2>
            <p className=" leading-relaxed">
              You should now be able to find your application in the Ubuntu Dash
              or Application menu. Click on it to launch the application.
            </p>
          </div>
          <p className="text-lg  leading-relaxed mt-4">
            Conclusion: In this blog post, you learned how to make a JAR file an
            executable application in Ubuntu by creating a desktop launcher file
            for it. This allows you to distribute your Java application as an
            executable file, making it easy for users to launch it without
            opening a terminal.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
