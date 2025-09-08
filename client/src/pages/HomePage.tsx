import FormComponent from "@/components/forms/FormComponent"
// import Footer from "@/components/common/Footer";

function HomePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="flex w-full items-center justify-center sm:w-1/2">
                <FormComponent />
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default HomePage
